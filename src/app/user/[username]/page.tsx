export default function MyFeedsPage({
  params,
}: {
  params: { username: string };
}) {
  console.log(params.username);
  return <div>{params.username}</div>;
}
