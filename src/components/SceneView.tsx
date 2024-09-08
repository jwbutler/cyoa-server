import { Scene, Session } from '../sessions/Session';

type Props = Readonly<{
  scene: Scene,
  session: Session
}>;

export const SceneView = ({ scene, session }: Props) => {
  const header = (
    <>
      <h2>{scene.name}</h2>
      <div>{scene.description}</div>
    </>
  );

  const items = scene.items.length > 0 ? (
    <>
      <h3>Items:</h3>
      <ul>
        {scene.items.map(item => (
          <li key={item}>
            <a href={`/${scene.id}/item/${item}/pickup`}>{item}</a>
          </li>
        ))}
      </ul>
    </>
  ) : undefined;
  
  const exits = (
    <>
      <h3>Exits:</h3>
      <ul>
        {
          Object.entries(scene.exits).map(([direction, toSceneId]) => {
            const toScene = session.scenes.find(s => s.id === toSceneId);
            if (!toScene) {
              throw new Error();
            }
            return (
              <li key={direction}>
                <a href={`/${scene.id}/${direction}`}>
                  {`${direction} -> ${toScene.name}`}
                </a>
              </li>
            );
          })
        }
      </ul>
    </>
  );
  
  const inventory = (
    <>
      <h3>Inventory:</h3>
      <ul>
        {session.items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
  
  const footer = (
    <div>Session ID: {session.id}</div>
  );

  return (
    <div>
      {header}
      {items}
      {exits}
      <hr/>
      {inventory}
      <hr/>
      {footer}
    </div>
  );
};