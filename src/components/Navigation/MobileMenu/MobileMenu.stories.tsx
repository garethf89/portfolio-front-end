import { DarkBackground } from "../../../stories/DarkBackground"
import MobileMenu from "./MobileMenu"

const MobileMenuStory = () => (
    <DarkBackground>
        <MobileMenu onClick={() => true} />
    </DarkBackground>
)

export default {
    title: "Navigation /Mobile Menu Icon",
}

export const MobileMenuIcon = MobileMenuStory.bind({})
MobileMenuIcon.args = {
    scale: 1,
}
