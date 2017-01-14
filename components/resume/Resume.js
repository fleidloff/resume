import Basic from "./Basic";
import About from "./About";
import Work from "./Work";
import Education from "./Education";
import Interests from "./Interests";

export default (data) => (
    <div id="layout" className="pure-g">
        <div className="sidebar pure-u-1 pure-u-md-1-4">
            <Basic {...data.basics} />
        </div>
        <div className="content pure-u-1 pure-u-md-3-4">
            <About {...data.basics} />
            <Work work={data.work} />
            <Education education={data.education} />
            <Interests interests={data.interests} />
        </div>
    </div>
)