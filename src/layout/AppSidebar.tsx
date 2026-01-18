import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { MdManageAccounts } from "react-icons/md";
import { MdOutlineToken } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import { ChevronDownIcon, GridIcon, HorizontaLDots } from "../icons";
import { useSidebar } from "../context/SidebarContext";
import { AiTwotoneBank } from "react-icons/ai";
import { LiaUsersCogSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { MdOutlineContentPaste } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import { useProfile } from "../queries/auth";
import { PiHandWithdrawBold, PiStepsDuotone } from "react-icons/pi";
import { PiHandDepositBold } from "react-icons/pi";
import { GiKnightBanner } from "react-icons/gi";
import { BiWallet } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { GiMining } from "react-icons/gi";
import { FaRegCircleDot } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  isRead?: boolean;
  isWrite?: boolean;
  subItems?: {
    name: string;
    path: string;
    pro?: boolean;
    new?: boolean;
  }[];
};

const navItems: NavItem[] = [
  // {
  //   icon: <GridIcon />,
  //   name: "Dashboard",
  //   subItems: [
  //     { name: "Statistics", path: "/home", pro: false },
  //     { name: "Balance Log", path: "/balance-log", pro: false },
  //     { name: "All User TDS", path: "/tds-management", pro: false },
  //     { name: "Liquidity Pool", path: "/liquidity-pool", pro: false },
  //     // { name: "Reward Distribution", path: "/rewards-distribution", pro: false},
  //     // { name: "Overall Funds", path: "/overall-fund", pro: false },
  //     // { name: "Users All Funds", path: "/userAll-dw-fund", pro: false },
  //     { name: "Activity List", path: "/activity-list", pro: false },
  //     { name: "Trade Activity", path: "/trade-activity", pro: false },
  //     { name: "Active Trade Order", path: "/trade-order", pro: false },
  //   ],
  //   isRead: false,
  //   isWrite: false,
  // },

  // {
  //   icon: <TbReportSearch />,
  //   name: "Reports",
  //   subItems: [
  //     { name: "Reward Distribution", path: "/rewards-distribution", pro: false, },
  //     { name: "Overall Funds", path: "/overall-fund", pro: false },
  //     { name: "Users All Funds", path: "/userAll-dw-fund", pro: false },
  //   ],
  //   isRead: false,
  //   isWrite: false,
  // },


  // {
  //   icon: <MdManageAccounts />,
  //   name: "User Management",
  //   subItems: [
  //     { name: "All Users", path: "/users", pro: false },
  //     { name: "Email Update Request", path: "/update-user-email", pro: false },
  //     { name: "Mobile Update Request", path: "/update-user-mobile", pro: false },
  //     { name: "Email Mobile Update History", path: "/email-mobile-history", pro: false, },
  //     { name: "User Bank Account", path: "/userbank-account", pro: false },
  //     { name: "Deleted Users", path: "/delete-user", pro: false },
  //     { name: "Add Funds to User", path: "/add-user-fund", pro: false },
  //     { name: "Tracking Active User", path: "/track-active-user", pro: false },
  //     { name: "Overall Users Withdrawal Freeze", path: "/fund-lock", pro: false, },
  //     { name: "Asset Wise Users Fund Freeze", path: "/asset-fund-lock", pro: false, },
  //     { name: "Asset Wise Users Fund Lock", path: "/assetfund-lock", pro: false, },
  //   ],
  //   isRead: false,
  //   isWrite: false,
  // },

  // {
  //   icon: <MdManageAccounts />,
  //   name: "User Management",
  //   path: "/users",
  //   isRead: true,
  //   isWrite: true,
  // },
  {
    icon: <PiHandWithdrawBold />,
    name: "Withdrawal Management",
    path: "/withdraw-inr",
    isRead: true,
    isWrite: true,
  },

  {
    icon: <FaUserAstronaut />,
    name: "KYC Management",
    path: "/kyc",
    isRead: false,
    isWrite: false,
  },
  {
    icon: <AiTwotoneBank />,
    name: "Admin Bank Account",
    path: "/bank-account",
    isRead: false,
    isWrite: false,
  },

  {
    icon: <PiHandDepositBold />,
    name: "Deposit Management",
    subItems: [
      { name: "Deposit INR", path: "/deposit-inr", pro: false },
      { name: "Deposit Crypto", path: "/crypto-deposit", pro: false },
      { name: "INR Price Setting", path: "/usdt-price", pro: false },
    ],
    isRead: false,
    isWrite: false,
  },

  {
    icon: <PiHandWithdrawBold />,
    name: "Withdrawal Management",
    subItems: [
      { name: "Withdraw INR", path: "/withdraw-inr" },
      { name: "Withdraw Crypto", path: "/withdraw-crypto" },
      { name: "Withdrawal Addresses", path: "/wallet-address-list" },
    ],
    isRead: false,
    isWrite: false,
  },

  {
    icon: <MdOutlineToken />,
    name: "Token Management",
    subItems: [
      { name: "Token List", path: "/token-list", pro: false },
      { name: "Trade Setting", path: "/fast-trade", pro: false },
      { name: "CMC API Key", path: "/cmc-api-key", pro: false },
    ],
    isRead: false,
    isWrite: false,
  },

  {
    icon: <BiWallet />,
    name: "Wallet Setting",
    subItems: [
      { name: "Cold Wallet", path: "/cold-wallet", pro: false },
      { name: "Hot Wallet", path: "/hot-wallet", pro: false },
    ],
    isRead: false,
    isWrite: false,
  },

  {
    icon: <GiMining />,
    name: "Mining Management",
    subItems: [
      { name: "Activity Point", path: "/activity-point", pro: false },
      { name: "Holding Point", path: "/holding-point", pro: false },
      { name: "Point to INR Conversion", path: "/point-to-coin", pro: false },
      { name: "Activity & Holding History", path: "/mining-history", pro: false, },
      // {  name: "Min Coin Redeem Limit",  path: "/min-coin-redeemlimit",  pro: false},
    ],
    isRead: false,
    isWrite: false,
  },

  {
    icon: <LiaUsersCogSolid />,
    name: "Subadmin Management",
    path: "/sub-admin",
    isRead: false,
    isWrite: false,
  },

  {
    icon: <MdOutlineContentPaste />,
    name: "Content Management",
    subItems: [
      { name: "FAQ's", path: "/faq-list" },
      { name: "Add Feedback Que", path: "/feedback-list" },
      { name: "User Feedback", path: "/user-feedback-list" },
      { name: "Banner List", path: "/banner-management", pro: false },
      { name: "Banner Content", path: "/banner-content", pro: false },
      { name: "Announcement Content", path: "/announcement-content" },
      { name: "Terms & Conditions", path: "/static-content-mangment" },
    ],
    isRead: false,
    isWrite: false,
  },

  {
    icon: <GiTrophyCup />,
    name: "Reward Management",
    subItems: [
      { name: "Signup Reward", path: "/referral-reward-list", pro: false },
      { name: "Coupon Reward", path: "/cupon-reward-list", pro: false },
      { name: "Referral Reward", path: "/camplainplan-list", pro: false },
      { name: "Deposit Cashback Reward", path: "/deposit-cashback-reward", pro: false, },
      { name: "HODL Reward", path: "/hodl-reward-list", pro: false, },
      { name: "Redeem Reward", path: "/redeem-reward-list", pro: false, },
      { name: "Trade Volume Booster", path: "/diwali-dhamaka", pro: false },
      // {  name: "Independence Day Reward", path: "/independenceday-reward-list", pro: false },
      // { name: "Deposit Crypto Reward", path: "/crypto-reward", pro: false,},
      // { name: "Users Reward", path: "/user-reward", pro: false,},
    ],
    isRead: false,
    isWrite: false,
  },

  {
    icon: <BiSupport />,
    name: "Help And Support",
    subItems: [
      { name: "Help and Support List", path: "/helpandsupport-list", pro: false, },
      { name: "Tickets", path: "/ticket", pro: false },
      { name: "Support Contact (Website)", path: "/support-contact-us" }
    ],
    isRead: false,
    isWrite: false,
  },



  {
    icon: <MdOutlineNotificationsActive />,
    name: "Notification Management",
    subItems: [
      { name: "Pop Up", path: "/pop-up-list" },
      { name: "Announcement", path: "/announcement-list" },
      { name: "Price Alert", path: "/price-alert-list" },
      { name: "Update App Version", path: "/version" },
    ],
    isRead: false,
    isWrite: false,
  },

  {
    icon: <FaRegCircleDot />,
    name: "Maintenance Management",
    path: "/maintenace",
    isRead: false,
    isWrite: false,
  },

  {
    icon: <GiKnightBanner />,
    name: "Deal & Drop Management",
    subItems: [
      { name: "Nowory Deals", path: "/deal-plan-list", pro: false },
      { name: "Nowory Drops", path: "/drop-pool", pro: false },
    ],
    isRead: false,
    isWrite: false,
  },

  {
    icon: <PiStepsDuotone />,
    name: "Nowory11 Management",
    subItems: [
      { name: "Nowory11 Plan List", path: "/Installment-plan-list", pro: false, },
      { name: "Nowory11 Subscriptions List", path: "/users-plan-list", pro: false, },
      { name: "Deposit Nowory11", path: "/deposit-nowory11", pro: false },
      { name: "Nowory11 User Subscription Limit", path: "/nowory11-invited-setting", pro: false },
      { name: "Nowory11 Invited User List", path: "/invited-user-list", pro: false },
      // { name: "Nowory11 Invited Code", path: "/nowory11-invited", pro: false },
    ],
    isRead: false,
    isWrite: false,
  },

  //  {
  //     icon: <TbVersions />,
  //     name: "Version Management",
  //     path: "/version",
  //     isRead: false,
  //     isWrite: false,
  //   },
  // {
  //   icon: <FaRegAddressCard />,
  //   name: "Wallet Address",
  //   subItems: [
  //     { name: "Wallet Address List", path: "/wallet-address-list", pro: false },
  //   ],
  //   isRead: false,
  //   isWrite: false,
  // },

  // {
  //   icon: <GiKnightBanner />,
  //   name: "Banner Management",
  //   subItems: [
  //     { name: "Banner", path: "/banner-management", pro: false },
  //     { name: "Banner Content", path: "/banner-content", pro: false },
  //   ],
  //   isRead: false,
  //   isWrite: false,
  // },

  // {
  //   icon: <CgCalendarDates />,
  //   name: "Nowory Deals Management",
  //   path: "/deal-plan-list",
  //   isRead: false,
  //   isWrite: false,
  // },

  // {
  //   icon: <FaQuora />,
  //   name: "FAQ Management",
  //   path: "/faq-list",
  //   isRead: false,
  //   isWrite: false,
  // },

  // {
  //   icon: <RiFeedbackLine />,
  //   name: "Feedback Management",
  //   subItems: [
  //     { name: "Add Feedback Que", path: "/feedback-list", pro: false },
  //     { name: "User Feedback", path: "/user-feedback-list", pro: false },
  //   ],
  //   isRead: false,
  //   isWrite: false,
  // },

  // {
  //   icon: <GiDroplets />,
  //   // name: "Nowory Drops",
  //   name: "Nowory Drops Management",
  //   path: "/drop-pool",
  //   isRead: false,
  //   isWrite: false,
  // },

  // {
  //   icon: <SiTurbosquid />,
  //   name: "Turbo Trade",
  //   subItems: [
  //     { name: "Turo Trade", path: "/turbo-trade" },
  //     { name: "Turo Subscriptions List", path: "/turbotrade-subscriptions" },
  //   ],

  //   isRead: false,
  //   isWrite: false,
  // },

  // {{ path: "/cashflow", element: <WithdrawDepositManagement /> },
  //{ path: "/cashflow/:symbol", element: <EditLimit /> },
  //   icon: <PiStepsDuotone />,
  //   name: "Nowory11 Plan",
  //   subItems: [
  //     {
  //       name: "Create Nowory11 Plan",
  //       path: "/createInstallment-plan",
  //       pro: false,
  //     },
  //     {
  //       name: "Nowory11 Plan List",
  //       path: "/Installment-plan-list",
  //       pro: false,
  //     },
  //     {
  //       name: "Nowory11 Plan T&C",
  //       path: "/term-condition",
  //       pro: false,
  //     },

  //     {
  //       name: "Nowory11 Plan Q&A",
  //       path: "/installment-qalist",
  //       pro: false,
  //     },
  //   ],
  //   isRead: false,
  //   isWrite: false,
  // },
  // {
  //   icon: <GridIcon />,
  //   name: "BNPL Management",
  //   subItems: [
  //     { name: "Create BNPL", path: `/create-bnpl/plan`, pro: false },
  //     { name: "BNPL List", path: "/bnpl-list", pro: false },
  //     { name: "BNPL Wallet List", path: "/bnpl-wallet-list", pro: false },
  //   ],
  //   isRead: false,
  //   isWrite: false,
  // },
  // {
  //   name: "Create T&C",
  //   path: "/create-term-condition",
  //   pro: false,
  // },

  // {
  //   name: "Create Q/A",
  //   path: "/create-qa",
  //   pro: false,
  // },
  // {
  //   icon: <GridIcon />,
  //   name: "Wallet Management",
  //   subItems: [
  //     {
  //       name: "Markup Fee",
  //       path: `/user-emi-wallet-details/markupFee`,
  //       pro: false,
  //     },
  //     {
  //       name: "Down Payment",
  //       path: "/user-emi-wallet-details/downPaymenmt",
  //       pro: false,
  //     },
  //     {
  //       name: "Subscription Fee",
  //       path: "/user-emi-wallet-details/subscriptionFee",
  //       pro: false,
  //     },
  //     {
  //       name: "Late Fee",
  //       path: "/user-emi-wallet-details/lateFee",
  //       pro: false,
  //     },
  //     {
  //       name: "Penality Fee",
  //       path: "/user-emi-wallet-details/penalityFee",
  //       pro: false,
  //     },
  //   ],
  //   isRead: false,
  //   isWrite: false,
  // },

  // {
  //   icon: <CalenderIcon />,
  //   name: "Calendar",
  //   path: "/calendar",
  // },
  // {
  //   icon: <UserCircleIcon />,
  //   name: "User Profile",
  //   path: "/profile",
  // },
  // {
  //   name: "Forms",
  //   icon: <ListIcon />,
  //   subItems: [{ name: "Form Elements", path: "/form-elements", pro: false }],
  // },
  // {
  //   name: "Tables",
  //   icon: <TableIcon />,
  //   subItems: [{ name: "Basic Tables", path: "/basic-tables", pro: false }],
  // },
  // {
  //   name: "Pages",
  //   icon: <PageIcon />,
  //   subItems: [
  //     { name: "Blank Page", path: "/blank", pro: false },
  //     { name: "404 Error", path: "/error-404", pro: false },
  //   ],
  // },
];

console.log(navItems,"navItemsnavItems");

interface AppSidebarProps {
  searchModule: string;
}

const AppSidebar: React.FC<AppSidebarProps> = ({ searchModule }) => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();
  const { data: userDetails } = useProfile();

  // const subAminList = useMemo(() => {
  //   if (!userDetails) {
  //     return [];
  //   }
  //   const findPermission = userDetails?.permissions?.map(
  //     (item: { permissions: any }) => item?.permissions
  //   );
  //   return findPermission?.[0];
  // }, [userDetails]);

  // const permissions = useMemo(() => {
  //   const permissionsSubAdmin = subAminList?.reduce(
  //     (
  //       acc: { [x: string]: { read: any; write: any } },
  //       item: { modules: string | number; read: any; write: any }
  //     ) => {
  //       acc[item.modules] = {
  //         read: item.read,
  //         write: item.write,
  //       };
  //       return acc;
  //     },
  //     {} as Record<string, { read: boolean; write: boolean }>
  //   );

  //   return permissionsSubAdmin;
  // }, [subAminList]);

  // const accessNavList = useMemo(() => {
  //   const authorizedNavItems = navItems.map((item) => {
  //     const modulePermissions = permissions?.[item.name] || {};
  //     return {
  //       ...item,
  //       isRead: modulePermissions.read || false,
  //       isWrite: modulePermissions.write || false,
  //       subItems: item.subItems?.map((subItem) => ({
  //         ...subItem,
  //         isRead: modulePermissions.read || false,
  //         isWrite: modulePermissions.write || false,
  //       })),
  //     };
  //   });

  //   const filterModule =
  //     authorizedNavItems?.filter((item: { name: any }) =>
  //       String(item?.name)
  //         ?.toLocaleLowerCase()
  //         ?.includes(searchModule?.toLowerCase())
  //     ) || [];

  //   if (filterModule?.length > 0) {
  //     return filterModule;
  //   }

  //   return authorizedNavItems;
  // }, [subAminList, searchModule]);

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  // useEffect(() => {
  //   let submenuMatched = false;
  //   ["main", "others"].forEach((menuType) => {
  //     const items = navItems;
  //     items.forEach((nav, index) => {
  //       if (nav.subItems) {
  //         nav.subItems.forEach((subItem) => {
  //           if (isActive(subItem.path)) {
  //             setOpenSubmenu({
  //               type: menuType as "main" | "others",
  //               index,
  //             });
  //             submenuMatched = true;
  //           }
  //         });
  //       }
  //     });
  //   });

  //   if (!submenuMatched) {
  //     setOpenSubmenu(null);
  //   }
  // }, [location, isActive]);

  useEffect(() => {
    let matchedSubmenu: { type: "main" | "others"; index: number } | null =
      null;

    ["main", "others"].forEach((menuType) => {
      const items = navItems;
      items?.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              matchedSubmenu = { type: menuType as "main" | "others", index };
            }
          });
        }
      });
    });

    /********************* Keep parent submenu open if a child is active*************************/
    if (!matchedSubmenu) {
      setOpenSubmenu(matchedSubmenu);
    }
  }, [location, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  const renderMenuItems = (items: NavItem[], menuType: "main" | "others") => (
    <ul className="flex flex-col gap-4">
      {items.map((nav, index) => {
        if (!nav.isRead) return null;

        const hasFullAccess = nav.isWrite || nav.isRead;
        return (
          <li key={nav.name}>
            {/* Render menu item */}
            {nav.subItems ? (
              // Submenu parent item
              <button
                onClick={() => handleSubmenuToggle(index, menuType)}
                className={`menu-item group ${openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
                  } cursor-pointer ${!isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "lg:justify-start"
                  }`}
              >
                <span
                  className={`menu-item-icon-size ${openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                    }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <>
                    <span className="menu-item-text">{nav.name}</span>
                    <ChevronDownIcon
                      className={`ml-auto w-5 h-5 transition-transform duration-200 ${openSubmenu?.type === menuType &&
                        openSubmenu?.index === index
                        ? "rotate-180 text-brand-500"
                        : ""
                        }`}
                    />
                  </>
                )}
              </button>
            ) : (
              // Single menu item with direct link
              nav.path && (
                <Link
                  to={nav.path || "#"}
                  className={`menu-item group ${isActive(nav.path)
                    ? "menu-item-active"
                    : "menu-item-inactive"
                    }`}
                >
                  <span
                    className={`menu-item-icon-size ${isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                      }`}
                  >
                    {nav.icon}
                  </span>
                  {(isExpanded || isHovered || isMobileOpen) && (
                    <span className="menu-item-text">{nav.name}</span>
                  )}
                </Link>
              )
            )}

            {/* Render submenu items if expanded */}
            {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
              <div
                ref={(el) => {
                  subMenuRefs.current[`${menuType}-${index}`] = el;
                }}
                className="overflow-hidden transition-all duration-300"
                style={{
                  height:
                    openSubmenu?.type === menuType &&
                      openSubmenu?.index === index
                      ? `${subMenuHeight[`${menuType}-${index}`]}px`
                      : "0px",
                }}
              >
                <ul className="mt-2 space-y-1 ml-9">
                  {nav.subItems.map(
                    (subItem: any) =>
                      // Show subitem if user has write access to parent or read access to item
                      (hasFullAccess || subItem.isRead) && (
                        <li key={subItem.name}>
                          <Link
                            to={subItem.path}
                            className={`menu-dropdown-item ${isActive(subItem.path)
                              ? "menu-dropdown-item-active"
                              : "menu-dropdown-item-inactive"
                              }`}
                          >
                            {subItem.name}
                            <span className="flex items-center gap-1 ml-auto">
                              {subItem.new && (
                                <span
                                  className={`ml-auto ${isActive(subItem.path)
                                    ? "menu-dropdown-badge-active"
                                    : "menu-dropdown-badge-inactive"
                                    } menu-dropdown-badge`}
                                >
                                  new
                                </span>
                              )}
                              {subItem.pro && (
                                <span
                                  className={`ml-auto ${isActive(subItem.path)
                                    ? "menu-dropdown-badge-active"
                                    : "menu-dropdown-badge-inactive"
                                    } menu-dropdown-badge`}
                                >
                                  pro
                                </span>
                              )}
                            </span>
                          </Link>
                        </li>
                      )
                  )}
                </ul>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200
        ${isExpanded || isMobileOpen
          ? "w-[292px]"
          : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
          }`}
      >
        <Link to="/withdraw-inr">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <img
                className="dark:hidden w-40 h-20"
                src="/images/logo/onlylogo.png"
                alt="Logo"
              />
              <img
                className="hidden dark:block w-60 h-10"
                src="/images/logo/nowory-logodark.png"
                alt="Logo"
                width={150}
                height={40}
              />
            </>
          ) : (
            <img
              src="/images/logo/onlylogo.png"
              alt="Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4 ">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${!isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "justify-start"
                  }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <HorizontaLDots className="size-6" />
                )}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
