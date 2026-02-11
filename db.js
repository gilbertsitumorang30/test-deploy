const pkg = require("pg");
const { Pool } = pkg;

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_gb2dFVhJQWr0@ep-lively-grass-a1zm7ztj-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
  ssl: {
    rejectUnauthorized: false, // penting untuk cloud DB
  },
});

module.exports = pool;
