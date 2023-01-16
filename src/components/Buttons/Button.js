import './Button.scss'

const Button = ({title="button"}) => {
    return(
        <div className="button">
            {title}

        </div>
    )
}

export default Button