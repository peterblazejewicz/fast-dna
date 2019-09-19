import { AbstractControlTemplateProps } from "./templates";
import {
    FormAttributeSettingsMappingToPropertyNames,
    FormChildOptionItem,
} from "./form.props";

export interface FormControlSwitchProps extends AbstractControlTemplateProps {
    /**
     * The name of the property
     */
    propertyName: string;

    /**
     * The schema to be used
     */
    schema: any;

    /**
     * The untitled string for missing titles
     */
    untitled: string;

    /**
     * The schema location (lodash path syntax)
     */
    schemaLocation: string;

    /**
     * The possible child options
     */
    childOptions: FormChildOptionItem[];

    /**
     * The additional attributes mapped to a property name
     */
    attributeSettingsMappingToPropertyNames?: FormAttributeSettingsMappingToPropertyNames;

    /**
     * Allow soft remove
     * defaults to true
     */
    softRemove?: boolean;
}
