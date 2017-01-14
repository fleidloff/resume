export default ({ interests }) => (
    <div className="interests">
        <h1 className="content-subhead">Interests</h1>

        <section className="part">
            <div className="part-description">
                <p dangerouslySetInnerHTML={{ __html: interests }} />
            </div>
        </section>
    </div>
)
