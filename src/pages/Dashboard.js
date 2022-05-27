const Dashboard = ({ user }) => {
  return (
    <section className="section">
      {/* Optional chaining */}
      <h4>Hello, {user?.name}</h4>
    </section>
  );
};
export default Dashboard;
