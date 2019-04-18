exports.resolvers = {
  Query: {
    getAllJobs: async (root, args, ctx) => {
      const allJobs = await ctx.Job.find({}).sort({ createDate: "desc" });
      return allJobs;
    }
  },
  Mutation: {
    addJob: async (root, args, ctx) => {
      const newJob = new ctx.Job({
        ...args
      }).save();
      return newJob;
    }
  }
};
// module.exports = resolvers;
