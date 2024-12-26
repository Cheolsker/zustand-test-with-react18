import { useUserStore } from "../store/user";

export function User() {
  const user = useUserStore((state) => state.user);
  const { setDisplayName, signIn, signOut } = useUserStore(
    (state) => state.actions
  );

  return (
    <section>
      <div>
        <h2>USER</h2>
        {user ? (
          <div>
            <p>{user?.email}</p>
            <p>{user?.displayName}</p>
            <p>{user?.isValid ? "true" : "false"}</p>
          </div>
        ) : (
          <p>No User...</p>
        )}
      </div>

      {user ? (
        <div>
          <input
            value={user?.displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <div>
            <button onClick={signOut}>Sign Out</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={signIn}>Sign In</button>
        </div>
      )}
    </section>
  );
}
