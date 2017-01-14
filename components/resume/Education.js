import get from "lodash/get";

export default ({ education = [] }) => (
    <div className="education">
        <h1 className="content-subhead">Education</h1>

        {education.map(renderSchool)}
    </div>
)

function renderSchool({ institution, studyType, startDate, endDate, summary }) {
    return (
        <section className="part">
            <header className="part-header">
                <h2 className="part-title">{studyType}</h2>

                <p className="part-meta">{`${startDate} - ${endDate}`}</p>
                <h4>{institution}</h4>
            </header>

            {summary.length > 0 ? (
                <div className="part-description">
                    <p>{ summary }</p>
                </div>
                ) : null}
            
        </section>
    );
}
