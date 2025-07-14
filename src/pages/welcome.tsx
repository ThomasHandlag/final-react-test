import { useAppNotification } from "../enum/context";

const Welcome = () => {
  const { api } = useAppNotification();

  return (
    <div>
      <h1>Welcome to the App!</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() =>
          api.info({
            message: "Welcome!",
            description: "This is your first notification.",
            placement: "bottomRight",
          })
        }
      >
        Get Started
      </button>
    </div>
  );
};

export default Welcome;
