import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import Button from "../../components/ui/button/Button";
import NeonSpinner from "../../components/common/NeonSpinner";
import BackComponent from "../../components/backcomponent/BackComponent";

import { api } from "../../services/apiServices";

/* =========================
   API CALL
========================= */
const addCategory = (formData: FormData) => {
  return api({
    url: "/admin/addCategory", // 🔁 change if needed
    method: "POST",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/* =========================
   COMPONENT
========================= */
export default function AddCategory() {
  const navigate = useNavigate();

  /* =========================
     MUTATION
  ========================= */
  const { mutate, isPending } = useMutation({
    mutationFn: addCategory,
    onSuccess: (res) => {
      if (res?.data?.responseCode === 200) {
        toast.success(res.data.responseMessage);
        navigate("/category-list");
      } else {
        toast.error(res?.data?.responseMessage);
      }
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.responseMessage || "Failed to add category"
      );
    },
  });

  /* =========================
     FORMIK
  ========================= */
  const formik = useFormik({
    initialValues: {
      title: "",
      icon: null as File | null,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Category title is required"),
      icon: Yup.mixed()
        .required("Category icon is required")
        .test(
          "fileType",
          "Only image files are allowed",
          (value: any) =>
            value &&
            ["image/png", "image/jpeg", "image/jpg", "image/svg+xml"].includes(
              value.type
            )
        )
        .test(
          "fileSize",
          "Image must be less than 1MB",
          (value: any) => value && value.size <= 1024 * 1024
        ),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("categoryTitle", values.title);
      if (values.icon) {
        formData.append("categoryIcon", values.icon);
      }
      mutate(formData);
    },
  });

  /* =========================
     UI
  ========================= */
  return (
    <div className="h-full">
      <BackComponent text="Add Category" />

      <div className="flex   h-full">
        <div className="flex flex-col justify-center flex-1 w-full mt-[10%] max-w-md mx-auto">
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* =========================
                CATEGORY TITLE
            ========================= */}
            <div>
              <Label>
                Category Title <span className="text-error-500">*</span>
              </Label>
              <Input
                name="title"
                placeholder="Enter category title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.title && formik.errors.title}
              />
              {formik.touched.title && formik.errors.title && (
                <p className="text-sm text-error-500 mt-1">
                  {formik.errors.title}
                </p>
              )}
            </div>

            {/* =========================
                CATEGORY ICON
            ========================= */}
            <div>
              <Label>
                Category Icon <span className="text-error-500">*</span>
              </Label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.currentTarget.files?.[0];
                  formik.setFieldValue("icon", file);
                }}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-primary-500 file:text-white
                  hover:file:bg-primary-600"
              />

              {formik.touched.icon && formik.errors.icon && (
                <p className="text-sm text-error-500 mt-1">
                  {formik.errors.icon as string}
                </p>
              )}

              {/* IMAGE PREVIEW */}
              {formik.values.icon && (
                <img
                  src={URL.createObjectURL(formik.values.icon)}
                  alt="Preview"
                  className="mt-3 h-20 w-20 object-cover rounded-md border"
                />
              )}
            </div>

            {/* =========================
                SUBMIT BUTTON
            ========================= */}
            <Button
              type="submit"
              className="w-full"
              size="sm"
              startIcon={isPending && <NeonSpinner size="6" />}
              disabled={isPending}
            >
              Add Category
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
