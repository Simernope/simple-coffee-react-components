import './ButtonWithoutBorder.scss'

const ButtonWithoutBorder = ({title="button"}) => {
    return(
        <div className="button-without-border">
            {title}

        </div>
    )
}

export default ButtonWithoutBorder