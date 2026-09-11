import withLayoutBasic from "@/libs/components/layout/LayoutBassic";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage =()=> {
    console.log('COMMUNITY COMPONENT -PAGES ROUTING')
    const [title ,setTitile] = useState<string>('hello');
    return(
        <div>
            COMMUNITY{ "" }
            <button onClick={() => alert('hello MITA2')} style={{ margin: "15px" }}>
            PressMe
            </button>
        </div>
    );
};

export default withLayoutBasic(Community);