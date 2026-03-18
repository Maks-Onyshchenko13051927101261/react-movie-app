import {MenuComponent} from "../components/menu-component/MenuComponent";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <Outlet/>
        </div>
    )
}