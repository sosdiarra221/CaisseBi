const icons = {
  Dashboard: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5.55286 19.446H9.14743V13.1482H14.8507V19.446H18.4453V9.77373L11.9991 4.94055L5.55286 9.77571V19.446ZM5.55286 21.1493C5.08446 21.1493 4.68348 20.9825 4.34993 20.6489C4.01638 20.3154 3.84961 19.9144 3.84961 19.446V9.77373C3.84961 9.50478 3.90971 9.25 4.02991 9.00938C4.15011 8.76876 4.31791 8.56974 4.53331 8.4123L10.9735 3.57915C11.1317 3.46719 11.2973 3.38222 11.4704 3.32426C11.6434 3.26629 11.8215 3.2373 12.0045 3.2373C12.1875 3.2373 12.3642 3.26629 12.5347 3.32426C12.7052 3.38222 12.8685 3.46719 13.0246 3.57915L19.4648 8.4123C19.6798 8.57115 19.8486 8.77066 19.9709 9.01083C20.0933 9.251 20.1545 9.5053 20.1545 9.77373V19.446C20.1545 19.9144 19.9871 20.3154 19.6524 20.6489C19.3177 20.9825 18.9153 21.1493 18.4453 21.1493H13.2132V14.7857H10.7849V21.1493H5.55286Z" fill="#6F767E"></path>
								</svg>`,
  Widget: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4.55377 11.25C4.08537 11.25 3.6844 11.0832 3.35085 10.7495C3.0173 10.4159 2.85052 10.0129 2.85052 9.54075V4.5538C2.85052 4.08377 3.0173 3.68138 3.35085 3.34665C3.6844 3.01192 4.08537 2.84455 4.55377 2.84455H9.5467C10.0151 2.84455 10.4161 3.01192 10.7497 3.34665C11.0832 3.68138 11.25 4.08377 11.25 4.5538V9.54075C11.25 10.0129 11.0832 10.4159 10.7497 10.7495C10.4161 11.0832 10.0151 11.25 9.5467 11.25H4.55377ZM4.55377 21.1495C4.08537 21.1495 3.6844 20.9827 3.35085 20.6491C3.0173 20.3156 2.85052 19.9146 2.85052 19.4462V14.4533C2.85052 13.9849 3.0173 13.5839 3.35085 13.2503C3.6844 12.9168 4.08537 12.75 4.55377 12.75H9.5467C10.0151 12.75 10.4161 12.9168 10.7497 13.2503C11.0832 13.5839 11.25 13.9849 11.25 14.4533V19.4462C11.25 19.9146 11.0832 20.3156 10.7497 20.6491C10.4161 20.9827 10.0151 21.1495 9.5467 21.1495H4.55377ZM14.4592 11.25C13.987 11.25 13.5841 11.0832 13.2504 10.7495C12.9168 10.4159 12.75 10.0129 12.75 9.54075V4.5538C12.75 4.08377 12.9168 3.68138 13.2504 3.34665C13.5841 3.01192 13.987 2.84455 14.4592 2.84455H19.4462C19.9162 2.84455 20.3186 3.01192 20.6533 3.34665C20.9881 3.68138 21.1554 4.08377 21.1554 4.5538V9.54075C21.1554 10.0129 20.9881 10.4159 20.6533 10.7495C20.3186 11.0832 19.9162 11.25 19.4462 11.25H14.4592ZM14.4592 21.1495C13.987 21.1495 13.5841 20.9827 13.2504 20.6491C12.9168 20.3156 12.75 19.9146 12.75 19.4462V14.4533C12.75 13.9849 12.9168 13.5839 13.2504 13.2503C13.5841 12.9168 13.987 12.75 14.4592 12.75H19.4462C19.9162 12.75 20.3186 12.9168 20.6533 13.2503C20.9881 13.5839 21.1554 13.9849 21.1554 14.4533V19.4462C21.1554 19.9146 20.9881 20.3156 20.6533 20.6491C20.3186 20.9827 19.9162 21.1495 19.4462 21.1495H14.4592ZM4.55377 9.54075H9.5467V4.5538H4.55377V9.54075ZM14.4592 9.54075H19.4462V4.5538H14.4592V9.54075ZM14.4592 19.4462H19.4462V14.4533H14.4592V19.4462ZM4.55377 19.4462H9.5467V14.4533H4.55377V19.4462Z" fill="#6F767E"></path>
								</svg>`,
  Table: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M20.4462 21.1245H4.55377C4.09379 21.1245 3.69492 20.9556 3.35715 20.6178C3.0194 20.2801 2.85052 19.8812 2.85052 19.4212V4.5538C2.85052 4.09218 3.0194 3.69191 3.35715 3.35298C3.69492 3.01403 4.09379 2.84455 4.55377 2.84455H20.4462C20.9078 2.84455 21.3081 3.01403 21.647 3.35298C21.986 3.69191 22.1554 4.09218 22.1554 4.5538V19.4212C22.1554 19.8812 21.986 20.2801 21.647 20.6178C21.3081 20.9556 20.9078 21.1245 20.4462 21.1245ZM4.55377 8.03695H20.4462V4.5538H4.55377V8.03695ZM8.2739 9.53695H4.55377V19.4212H8.2739V9.53695ZM16.7261 9.53695V19.4212H20.4462V9.53695H16.7261ZM15.2261 9.53695H9.7739V19.4212H15.2261V9.53695Z" fill="#6F767E"></path>
								</svg>`,
};

interface MenuItemChild {
  lable: string;
  link?: string;
  // Roles allowed to see this entry. Omitted = visible to everyone (the
  // existing default for every pre-existing entry). Mirrors the
  // `user?.role !== 'CASHIER'` check already used in Header2.vue's profile
  // menu for hiding "Paramètres" from cashiers — same idea, applied here so
  // the sidebar doesn't dead-end into routes middleware/auth.global.ts's
  // CASHIER_ALLOWED_PREFIXES would bounce them out of anyway.
  roles?: Array<"OWNER" | "MANAGER" | "GERANT" | "CASHIER">;
  childer?: {
    lable: string;
    link?: string;
    child?: {
      lable: string;
      link: string;
    }[];
  }[];
}

type MenuItem = {
  icons: string;
  lable: string;
  link?: string;
  className?: string;
  submenu?: MenuItemChild[];
};

export const menuItems: MenuItem[] = [
  {
    icons: icons.Dashboard,
    lable: "Dashboard",
    link: "/",
    className: "no-submenu",
  },
  {
    icons: icons.Widget,
    lable: "POS",
    link: "/pos",
    className: "no-submenu",
  },
  {
    icons: icons.Table,
    lable: "Gestion",
    submenu: [
      { lable: "Produits", link: "/produits" },
      { lable: "Catégories", link: "/categories" },
      {
        lable: "Stock",
        childer: [
          { lable: "Vue d'ensemble", link: "/stock" },
          { lable: "Mouvement de stock", link: "/stock/mouvement" },
          { lable: "Inventaire", link: "/stock/inventaire" },
        ],
      },
      { lable: "Magasins", link: "/magasins", roles: ["OWNER"] },
      { lable: "Caisse", link: "/caisse" },
      { lable: "Ventes", link: "/ventes" },
      { lable: "Dépenses", link: "/depenses", roles: ["OWNER", "MANAGER", "GERANT"] },
      { lable: "Rapports", link: "/rapports" },
      { lable: "Comptabilité", link: "/comptabilite", roles: ["OWNER", "MANAGER", "GERANT"] },
      { lable: "Utilisateurs", link: "/utilisateurs" },
      { lable: "Rôles & permissions", link: "/utilisateurs/roles", roles: ["OWNER"] },
      { lable: "Paramètres", link: "/parametres" },
    ],
  },
];
