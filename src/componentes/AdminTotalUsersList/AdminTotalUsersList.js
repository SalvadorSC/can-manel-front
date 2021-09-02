export const AdminTotalUsersList = (props) => {
  const {
    users: { name, surnames, phone, email, data },
  } = props;
  return (
    <div className="col-12">
      <div className="table-products row">
        <div className="col-2">
          <p>{name}</p>
        </div>
        <div className="col-2">
          <span>{surnames}</span>
        </div>
        <div className="col-3">
          <span>{email}</span>
        </div>
        <div className="col-1 d-flex justify-content-center">
          <span>{phone}</span>
        </div>
        <div className="col-1 text-center">
          <span>12/07/2021</span>
        </div>
        <div className="col">
          <span>c/ Sant Jordi 23</span>
        </div>
      </div>
    </div>
  );
};
