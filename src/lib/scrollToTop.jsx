const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
    document.body.scrollTo({top: 0, behavior: "smooth"})
    document.documentElement.scrollTo({top: 0, behavior: "smooth"})

    return () => {
        window.scrollTo({top: 0, behavior: "smooth"});
        document.body.scrollTo({top: 0, behavior: "smooth"})
        document.documentElement.scrollTo({top: 0, behavior: "smooth"})
    }
}
export default scrollToTop;

