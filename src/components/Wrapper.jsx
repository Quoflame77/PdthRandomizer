const Wrapper = (props) => {
    return (
        <div className="min-h-screen flex justify-center items-center pt-12 box-border bg-[url(./assets/siteBG.jpg)] bg-cover bg-center bg-fixed bg-no-repeat backdrop-blur-5xl">
            {props.children}
        </div>
    );
};

export default Wrapper;
