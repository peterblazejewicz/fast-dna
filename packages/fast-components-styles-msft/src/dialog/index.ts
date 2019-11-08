import { DesignSystem, DesignSystemResolver } from "../design-system";
import { ComponentStyles, CSSRules } from "@microsoft/fast-jss-manager";
import { applyElevatedCornerRadius } from "../utilities/border";
import { backgroundColor, relativeMotion } from "../utilities/design-system";
import { applyElevation, ElevationMultiplier } from "../utilities/elevation";
import { highContrastBorder } from "../utilities/high-contrast";
import { multiply, toMs, toPx } from "@microsoft/fast-jss-utilities";
import { DialogClassNameContract } from "@microsoft/fast-components-class-name-contracts-base";
import { bezier, duration } from "../utilities/motion";

const styles: ComponentStyles<DialogClassNameContract, DesignSystem> = {
    dialog: {
        display: "none",
        '&[aria-hidden="false"]': {
            display: "block",
        },
    },
    dialog_positioningRegion: {
        display: "flex",
        "justify-content": "center",
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        overflow: "auto",
    },
    dialog_modalOverlay: {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        background: "rgba(0, 0, 0, 0.3)",
    },
    dialog_contentRegion: {
        "margin-top": "auto",
        "margin-bottom": "auto",
        background: backgroundColor,
        ...applyElevatedCornerRadius(),
        ...applyElevation(ElevationMultiplier.e14),
        "z-index": "1",
        ...highContrastBorder,
    },
};

export default styles;
