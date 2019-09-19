import React from "react";
import manageJss, { ManagedJSSProps } from "@microsoft/fast-jss-manager-react";
import { ManagedClasses } from "@microsoft/fast-components-class-name-contracts-base";
import styles from "./control.textarea.style";
import { TextareaControlProps } from "./control.textarea.props";
import { TextareaControlClassNameContract } from "./control.textarea.style";
import { classNames } from "@microsoft/fast-web-utilities";

/**
 * Form control definition
 */
class TextareaControl extends React.Component<
    TextareaControlProps & ManagedClasses<TextareaControlClassNameContract>,
    {}
> {
    public static displayName: string = "TextareaControl";

    public static defaultProps: Partial<
        TextareaControlProps & ManagedClasses<TextareaControlClassNameContract>
    > = {
        managedClasses: {},
    };

    public render(): React.ReactNode {
        return (
            <textarea
                className={classNames(this.props.managedClasses.textareaControl, [
                    this.props.managedClasses.textareaControl__disabled,
                    this.props.disabled,
                ])}
                id={this.props.dataLocation}
                name={this.props.dataLocation}
                rows={this.getRows()}
                value={this.getValue()}
                onChange={this.handleChange(this.props.onChange)}
                disabled={this.props.disabled}
                ref={this.props.elementRef as React.Ref<HTMLTextAreaElement>}
                onFocus={this.props.reportValidity}
                onBlur={this.props.updateValidity}
            />
        );
    }

    private getRows(): number {
        return typeof this.props.rows === "number" ? this.props.rows : 3;
    }

    private getValue(): string {
        return this.props.value || this.props.default || "";
    }

    private handleChange = (
        onChangeHandler: (value: any) => void
    ): ((e: React.ChangeEvent<HTMLTextAreaElement>) => void) => {
        return (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
            onChangeHandler(e.target.value);
        };
    };
}

export { TextareaControl };
export default manageJss(styles)(TextareaControl);
