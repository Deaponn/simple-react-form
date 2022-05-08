import './RequiredInfo.css'

function RequiredInfo({ meta }){
    return meta.error && meta.touched && <div className="required-indicator"><div className="message">Required</div>!</div>
}

export default RequiredInfo