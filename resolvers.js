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
        jobTitle: args.jobTitle,
        companyName: args.companyName,
        companyLogo: args.companyLogo,
        tags: args.tags,
        address: args.address,
        jobDescription: args.jobDescription
      }).save();
      return newJob;
    }
  }
};
// module.exports = resolvers;
