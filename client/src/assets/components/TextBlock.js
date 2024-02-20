import {Card} from "@mantine/core";
import React from "react";

const TextBlock = ({ heading, text }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">

                    <Card className="text-block-wrapper" withBorder shadow="sm" radius="md">
                        <div className="text-block-content">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1>{heading}</h1>
                                    <p>{text}</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    )
}

export default TextBlock;