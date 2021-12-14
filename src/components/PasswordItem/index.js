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

  const initial = name ? name[0].toUpperCase() : ''

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

          <p className="username">{name}</p>
          {isShowPassword ? (
            <p className="password-color-txt">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="password-star-img"
            />
          )}
        </div>

        <button
          type="button"
          className="delete-icon-btn"
          testid="delete"
          onClick={onClickDeleteIcon}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="icon-img-delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
