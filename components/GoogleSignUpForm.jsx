import { currentFormUrl } from "../src/globals/globals";

export default function GoogleSignUpForm() {

    return (<iframe src={currentFormUrl} height="780" frameborder="0" marginheight="10" marginwidth="10" className="text-txt rounded-2xl w-full max-h-screen">Loading…</iframe>)
}