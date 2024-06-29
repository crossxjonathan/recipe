export const getServerSideProps = async (context) => {
    const { id } = context.params;
  
    try {
      const res = await GetDetailRecipe(id);
      return {
        props: {
          detail: res.data,
          id,
        },
      };
    } catch (err) {
      return {
        props: {
          detail: null,
          id,
        },
      };
    }
  };