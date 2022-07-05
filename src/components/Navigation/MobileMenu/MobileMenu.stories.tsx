import { DarkBackground } from "../../../stories/DarkBackground"
import MobileMenu from "./MobileMenu"

const MobileMenuStory = ({ scale }) => (
    <DarkBackground>
        <MobileMenu onClick={() => true} scale={scale} />
    </DarkBackground>
)

export default {
    title: "Navigation /Mobile Menu Icon",
    argTypes: {
        scale: {
            control: {
                type: "range",
                min: 0,
                max: 2,
                step: 0.1,
            },
        },
    },
}

export const MobileMenuIcon = MobileMenuStory.bind({})
MobileMenuIcon.args = {
    scale: 1,
}
