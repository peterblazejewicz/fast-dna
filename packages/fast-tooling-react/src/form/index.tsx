import React from "react";
import BareForm from "./form";
import { FormPlugin, FormPluginProps } from "./plugin";
import { ControlConfig, ControlType, StandardControlPlugin } from "./templates";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

const Form: React.FC<any> = (props: React.PropsWithChildren<any>): React.ReactElement => {
    return (
        <DndProvider backend={HTML5Backend}>
            <BareForm {...props} />
        </DndProvider>
    );
};

export * from "./custom-controls";
export * from "./controls";
export {
    ControlConfig,
    ControlType,
    Form,
    BareForm,
    FormPlugin,
    FormPluginProps,
    StandardControlPlugin,
};