const PageNotfound = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src="/icons/404.svg"
          alt=""
          height={"300px"}
          style={{ marginTop: "50px" }}
        />
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          OOPS! Page Not Found
        </h1>
      </div>
    </>
  );
};
export default PageNotfound;
