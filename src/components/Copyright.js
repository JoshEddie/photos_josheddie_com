export default function Copyright() {

    var date = new Date();

    return (
        <section className="copyright">

            © {date.getFullYear()} Josh Eddie Photography

        </section>
    )
}