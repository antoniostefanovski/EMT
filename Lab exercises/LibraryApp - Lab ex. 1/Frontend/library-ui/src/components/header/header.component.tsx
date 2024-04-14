import { HeaderContainer, StyledNavLink } from "./header.styles"

export const Header = () => {
    return (
      <HeaderContainer>
        <StyledNavLink to={'/'}>Books</StyledNavLink>
        <StyledNavLink to={'/authors'}>Authors</StyledNavLink>
        <StyledNavLink to={'/countries'}>Countries</StyledNavLink>
      </HeaderContainer>
    )
}