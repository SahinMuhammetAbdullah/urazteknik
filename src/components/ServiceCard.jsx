function ServiceCard({ iconClass, title, description }) {
    return (
      <div className="service-card">
        <div className="service-icon">
          <i className={iconClass}></i>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  export default ServiceCard;