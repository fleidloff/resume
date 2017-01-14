export default ({ name, label, email, phone, website, work, location }) => (
    <div className="header">
        <h1 className="brand-title">{name}</h1>
        <h2 className="brand-tagline">{label}</h2>
        <p className="part-meta">at {work}</p>
        <br />
        <p className="part-meta">{location.city}</p>
        <p className="part-meta">{phone}</p>
        <p className="part-meta">{email}</p>
        <p className="part-meta">{website}</p>
    </div>
)
