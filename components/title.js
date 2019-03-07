import { Title } from "rbx";

export function SerifTitle(props) {
  return <Title {...props} className="font-secondary" />;
}

export function AltTitle(props) {
  return <Title {...props} className="font-alt" />;
}

export default {
  Serif: SerifTitle,
  Alt: AltTitle
};
