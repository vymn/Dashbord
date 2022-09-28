const MainLayout = () =>
    import ("@/layouts/MainLayout");
const Dashboard = () =>
    import ("@/pages/Home");
const Procurement = () =>
    import ("@/pages/ProcurementView");
const NotFound = () =>
    import ("@/pages/NotFound");
export default [{
        path: "/",
        component: MainLayout,
        children: [
            { path: "/", redirect: { name: "DashboardHome" } },
            { path: "home", name: "DashboardHome", component: Dashboard },
            { path: "Procurement", name: "Procurement", component: Procurement },
        ],
    },
    { path: "*", component: NotFound },
];