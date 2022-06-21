import SLegal from "./style";
import LogoWild from "../../../public/images/wild-code-school-logo.png";

export default function Legal() {
  return (
    <SLegal>
      <div>
        <h5>
          Website created as part of the web developer training at the Wild Code
          School between February 2022 and July 2022.
          <br />
          <br />
          API used for question generation: https://opentdb.com/api_config.php.
        </h5>
        <a
          href="https://www.wildcodeschool.com/fr-FR/formations/formation-developpeur-web"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LogoWild} alt="logo wild" />
        </a>
      </div>
    </SLegal>
  );
}
