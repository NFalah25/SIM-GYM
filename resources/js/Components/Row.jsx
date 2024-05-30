function Row({ children, orientation = "vertical", className }) {
    return (
        <div
            className={`mb-5 flex ${className} ${orientation === "vertical" ? "flex-col gap-7" : "items-center justify-between"}`}
        >
            {children}
        </div>
    );
}

export default Row;
