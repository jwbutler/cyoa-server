import { Scene, Session } from '../sessions/Session';

type Props = Readonly<{
  scene: Scene,
  session: Session
}>;

export const SceneView = ({ scene, session }: Props) => {
  type ExitLinkProps = Readonly<{
    direction: string;
    toSceneId: string;
  }>;

  const ExitLink = ({ direction, toSceneId }: ExitLinkProps) => {
    const toScene = session.scenes.find(s => s.id === toSceneId);
    if (!toScene) {
      throw new Error();
    }
    const href = `/${scene.id}/${direction}`;
    const label = `${direction} -> ${toScene.name}`;
    return <a href={href}>{label}</a>;
  };

  type ItemLinkProps = Readonly<{
    item: string
  }>;

  const ItemLink = ({ item }: ItemLinkProps) => {
    const href = `/${scene.id}/item/${item}`;
    const label = item;
    return <a href={href}>{label}</a>;
  };

  return (
    <div>
      <div>{scene.name}</div>
      <div>{scene.description}</div>
      <div>Items:</div>
      <ul>
        {scene.items.map(item => (
          <li key={item}>
            <ItemLink item={item}/>
          </li>
        ))}
      </ul>
      <div>Exits:</div>
      <ul>
        {
          Object.entries(scene.exits).map(([direction, toSceneId]) => (
            <li key={direction}>
              <ExitLink direction={direction} toSceneId={toSceneId}/>
            </li>
          ))
        }
      </ul>
      <hr/>
      <div>You are carrying:</div>
      <ul>
        {session.items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <hr />
      <div>Session ID: {session.id}</div>
    </div>
  );
};