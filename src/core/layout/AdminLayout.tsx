import AppBar from "../navigation/AppBar";

const AdminLayout = (props: any) => {
    return <>
        <AppBar/>
        <div className="MainWrapper col-md-12">
            {
                props.children
            }
        </div>


    </>

}

export default AdminLayout;