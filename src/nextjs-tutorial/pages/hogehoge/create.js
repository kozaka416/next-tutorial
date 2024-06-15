const CreatePage = () => {
    const handleSubmit = async (event) => {
      event.preventDefault();
      // フォームのデータを収集し、APIリクエストを送信して新しいリソースを作成する
    };
  
    return (
      <div>
        <h1>Create New Hogehoge</h1>
        <form onSubmit={handleSubmit}>
          {/* フォームフィールド */}
          <button type="submit">Create</button>
        </form>
      </div>
    );
  };
  
  export default CreatePage;
  