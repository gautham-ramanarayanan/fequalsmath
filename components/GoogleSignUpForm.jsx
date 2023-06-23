import { currentFormUrl } from "../src/globals/globals";

export default function GoogleSignUpForm() {

    return (<iframe src={currentFormUrl} width="640" height="780" frameborder="0" marginheight="10" marginwidth="10" className="text-txt rounded-2xl">Loading…</iframe>)
}