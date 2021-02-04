import { useEffect, useState } from "react";
import * as React from "react";

import debounce from "../../../helpers/debounce"
import { gatsbyWindow } from "../../../helpers/gatsbyWindow"
import styled from "@emotion/styled"

type LineProps = {
    active: boolean
}

type MobileMenuProps = {
    scale?: number
    onClick: () => void
}

type MobileMenuCSSProps = {
    scale?: number
}

const MobileHamburger = styled.div`
    cursor: pointer;
    display: inline-block;
    transform: ${(props: MobileMenuCSSProps) => `scale(${props.scale})`};
`

const MobileLine = styled.span<LineProps>`
    width: 3rem;
    height: 5px;
    background-color: #fff;
    display: block;
    margin: 8px 0.5rem 8px auto;
    transition: all 0.3s ease-in-out;
    &:hover {
        cursor: pointer;
    }
    &:nth-of-type(1) {
        transform: ${props =>
            props.active
                ? "translateY(13px) rotate(45deg)"
                : "translateY(0) rotate(0)"};
    }
    &:nth-of-type(2) {
        opacity: ${props => (props.active ? "0" : "1")};
    }
    &:nth-of-type(3) {
        transform: ${props =>
            props.active
                ? "translateY(-13px) rotate(-45deg)"
                : "translateY(0) rotate(0)"};
    }
`

const MobileMenu = ({
    scale = 1,
    onClick,
}: MobileMenuProps): React.ReactElement => {
    const [active, setActive] = useState(false)
    const click = () => {
        setActive(!active)
        onClick()
    }
    const throttled = debounce(() => {
        setActive(false)
    }, 200)

    useEffect(() => {
        if (gatsbyWindow()) {
            window.addEventListener("resize", throttled)
        }

        return function cleanup() {
            if (gatsbyWindow) {
                window.removeEventListener("resize", throttled)
            }
        }
    }, [])
    return (
        <MobileHamburger scale={scale} onClick={click}>
            <MobileLine active={active} />
            <MobileLine active={active} />
            <MobileLine active={active} />
        </MobileHamburger>
    )
}

export default MobileMenu
