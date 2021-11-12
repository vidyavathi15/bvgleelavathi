import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deletePassword} = props

  const {
    id,
    website,
    name,
    password,
    initialClassName,

    isShowPassword,
  } = passwordDetails

  const initial = name ? name[0].toUppercase() : ''
  const starOrPasswordText = isShowPassword
    ? 'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'
    : `${password}`
  const altText = isShowPassword ? 'stars' : ''

  const onClickDeleteIcon = () => {
    deletePassword(id)
  }

  return (
    <li className="password-single-item">
      <div className="each-password-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div className="detail-container">
          <p className="website">{website}</p>
          <div className="name-delete-icon-container">
            <p className="username">{name}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="icon-img"
              testid="delete"
              onClick={onClickDeleteIcon}
            />
          </div>
          <img
            src={starOrPasswordText}
            alt={altText}
            className="password-star-img"
          />
        </div>
      </div>
    </li>
  )
}

export default PasswordItem
