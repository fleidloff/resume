import get from "lodash/get";

export default ({ work = [] }) => (
    <div className="work">
        <h1 className="content-subhead">Work</h1>

        {work.reduce((memo, item) => {
            const company = get(memo, `${memo.length - 1}.company`)
            if (company === item.company) {
                return memo.concat({ ...item, isPromotion: true });
            }
            return memo.concat(item);
        }, []).map(renderPosition)}
    </div>
)

function renderPosition({ company, isPromotion, position, startDate, endDate, summary, highlights }) {
    return (
        <section className="part">
            <header className="part-header">
                { !isPromotion ? <h2 className="part-title">{company}</h2> : null}

                <p className="part-meta">{`${startDate} - ${endDate}`}</p>
                <h4>{position}</h4>
            </header>

            {summary.length > 0 ? (
                <div className="part-description">
                    <p>{ summary }</p>
                </div>
                ) : null}
            
        </section>
    );
}
