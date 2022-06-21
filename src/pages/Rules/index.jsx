import SRules from "./style";

export default function Rules() {
  const image = `/images/rulesCard.svg`;
  return (
    <SRules>
      <section>
        <div className="title-container">
          <h3 className="title">Rules</h3>
        </div>
        <div className="rules-container">
          <div className="rules">
            <p>
              Roll the dice to get started, then choose the correct answer. If
              you roll 1-2, easy question, 3-4: medium, 5-6: difficult. You win
              the game when you correctly answer to one question of each
              category.
            </p>
            <p> Good Luck, Have Fun !</p>
          </div>
          <div className="imgContainer">
            <img src={image} alt="categories-explaination" />
          </div>
        </div>
      </section>
    </SRules>
  );
}
