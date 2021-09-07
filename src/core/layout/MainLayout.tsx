const MainLayout = (props: any) => {
    return <div className="MainWrapper col-md-12">
        {
            props.children
        }
    </div>

}

export default MainLayout;