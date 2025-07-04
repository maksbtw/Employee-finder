import teamData from "./data";

export async function GET(): Promise<Response> {
    return new Response(JSON.stringify(teamData, null, 2));
}