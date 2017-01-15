export default ({ summary }) => (
    <div className="about">
        <h1 className="content-subhead">About</h1>

        <section className="part">
            <div className="part-description">
                <p dangerouslySetInnerHTML={{ __html: summary }} />
            </div>
        </section>
    </div>
)
