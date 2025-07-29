import { Link } from "react-router-dom"
import { StyledHeader } from "./header-styles"

const HeaderProcess = () => {
  return (
    <StyledHeader>
         <Link to='/'>
        <picture>
          <source
            src='/icons/shoping cart icon ipad and desktop.svg'
            media='(min-width: 1024px)'
          />
          <source
            src='/icons/shoping cart icon ipad and desktop.svg'
            media='(min-width: 768px)'
          />
          <source
            src='/icons/nintendo logo small.png'
            media='(min-width: 393px)'
          />
          <img src='/icons/nintendo logo small.png' alt='Nintendo logo' />
        </picture>
      </Link>
    </StyledHeader>
  )
}

export default HeaderProcess